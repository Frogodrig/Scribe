import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import ScribeHomeIcon from "../icons/scribeHomeIcon";
import ScribeSettingsIcon from "../icons/scribeSettingsIcon";
import ScribeTrashIcon from "../icons/scribeTrashIcon";

interface NativeNavigationProps {
  myWorkspaceId: string;
  classsName?: string;
}

const NativeNavigation: React.FC<NativeNavigationProps> = ({
  myWorkspaceId,
  classsName,
}) => {
  return (
    <nav className={twMerge("my-2", classsName)}>
      <ul className="flex flex-col gap-2">
        <li>
          <Link
            className="group/native
                 flex
                 text-Neutrals/neutrals-7
                 transition-all
                 gap-2
                "
            href={`/dashboard/${myWorkspaceId}`}
          >
            <ScribeHomeIcon />
            <span>My Workspace</span>
          </Link>
        </li>

        <li>
          <Link
            className="group/native
                 flex
                 text-Neutrals/neutrals-7
                 transition-all
                 gap-2
                "
            href={`/dashboard/${myWorkspaceId}`}
          >
            <ScribeSettingsIcon />
            <span>Settings</span>
          </Link>
        </li>

        <li>
          <Link
            className="group/native
                 flex
                 text-Neutrals/neutrals-7
                 transition-all
                 gap-2
                "
            href={`/dashboard/${myWorkspaceId}`}
          >
            <ScribeTrashIcon />
            <span>Trash</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NativeNavigation;
