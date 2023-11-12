import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type SidebarItemProps = {
  href: string;
  icon: IconProp;
};

export default function SidebarItem({ href, icon }: SidebarItemProps) {
  return (
    <li className="flex items-center justify-center mb-4">
      <Link href={href}>
        <FontAwesomeIcon icon={icon} height={32} width={32} />
      </Link>
    </li>
  );
}
