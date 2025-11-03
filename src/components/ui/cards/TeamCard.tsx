import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
interface SocialLinks {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
}

interface TeamCardProps {
    image : string;
    name : string;
    role : string;
    bio : string;
    socialLinks?: SocialLinks;
}

export const TeamCard : React.FC < TeamCardProps > = ({image, name, role, bio, socialLinks}) => {
    return (
        <div
            className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"/>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {name}
                </h3>

                <p className="text-teal-600 font-medium text-sm uppercase tracking-wide mb-3">
                    {role}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {bio}
                </p>

                {socialLinks && (
                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                        {socialLinks.linkedin && (
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-teal-600 flex items-center justify-center transition-colors group">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="w-4 h-4 text-gray-600 group-hover:text-white"/>
                            </a>
                        )}
                        {socialLinks.twitter && (
                            <a
                                href={socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-teal-600 flex items-center justify-center transition-colors group">
                                <FontAwesomeIcon
                                    icon={faTwitter}
                                    className="w-4 h-4 text-gray-600 group-hover:text-white"/>
                            </a>
                        )}
                        {socialLinks.github && (
                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-teal-600 flex items-center justify-center transition-colors group">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="w-4 h-4 text-gray-600 group-hover:text-white"/>
                            </a>
                        )}
                        {socialLinks.email && (
                            <a
                                href={`mailto:${socialLinks.email}`}
                                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-teal-600 flex items-center justify-center transition-colors group">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="w-4 h-4 text-gray-600 group-hover:text-white"/>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};