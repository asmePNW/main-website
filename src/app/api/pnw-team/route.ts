import { NextResponse } from "next/server";

// ============ Types ============
interface TeamMember {
  name: string;
  position: string;
  image: string;
}

interface CategorizedTeam {
  leadership: TeamMember[];
  mentors: TeamMember[];
  officers: TeamMember[];
  advisors: TeamMember[];
}

// ============ Constants ============
const PNW_BASE_URL = "https://mypnwlife.pnw.edu";
const TEAM_PAGE_URL = `${PNW_BASE_URL}/asme/leadership-team/`;
const DEFAULT_AVATAR = `${PNW_BASE_URL}/images/ico/male_user_large.png`;
const DEFAULT_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
};

// Regex to match officer cards in HTML
const OFFICER_PATTERN = /<img[^>]*src="([^"]*)"[^>]*alt="[^"]*Profile"[\s\S]*?<span class="h5">([^<]+)<\/span>[\s\S]*?<span[^>]*class="[^"]*officers_position[^"]*"[^>]*>([^<]+)<\/span>/g;

// Cache for 10 minutes (team changes rarely)
export const revalidate = 600;

// ============ Helpers ============
const decodeHtmlEntities = (str: string): string =>
  str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const toAbsoluteUrl = (path: string): string =>
  path.startsWith("http") ? path : `${PNW_BASE_URL}${path}`;

const parseMembers = (html: string): TeamMember[] => {
  const members: TeamMember[] = [];
  const seen = new Set<string>();

  let match;
  while ((match = OFFICER_PATTERN.exec(html)) !== null) {
    const [, imagePath, name, position] = match;
    const trimmedName = name.trim();

    if (trimmedName && !seen.has(trimmedName)) {
      seen.add(trimmedName);
      members.push({
        name: trimmedName,
        position: decodeHtmlEntities(position.trim()),
        image: toAbsoluteUrl(imagePath),
      });
    }
  }

  return members;
};

const categorizeMembers = (members: TeamMember[]): CategorizedTeam => {
  const result: CategorizedTeam = {
    leadership: [],
    mentors: [],
    officers: [],
    advisors: [],
  };

  for (const member of members) {
    const pos = member.position.toLowerCase();

    if (pos.includes("president")) {
      result.leadership.push(member);
    } else if (pos.includes("mentor")) {
      result.mentors.push(member);
    } else if (pos.includes("advisor")) {
      result.advisors.push(member);
    } else {
      result.officers.push(member);
    }
  }

  // President before Vice-President
  result.leadership.sort((a, b) =>
    a.position.toLowerCase().includes("vice") ? 1 : -1
  );

  return result;
};

// ============ Route Handler ============
export async function GET() {
  try {
    const response = await fetch(TEAM_PAGE_URL, {
      headers: DEFAULT_HEADERS,
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Upstream error: ${response.status}` },
        { status: response.status }
      );
    }

    const html = await response.text();
    const members = parseMembers(html);
    const categorized = categorizeMembers(members);

    return NextResponse.json({
      source: "html_parsed",
      count: members.length,
      data: categorized,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to fetch" },
      { status: 500 }
    );
  }
}
