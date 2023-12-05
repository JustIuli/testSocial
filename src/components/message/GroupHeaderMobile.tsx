import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

const GroupHeaderMobile = (props:any) => {
  return (
    <div className="flex justify-around px-1 mt-2">
      <div className="flex items-center space-x-2">
        <Avatar size="sm" src="https://placehold.co/30" />
        <p>Group Name</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex space-x-[-10px]">
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=67" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=63" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=57" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=54" />
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=40" />
          </div>
        <div>
          <Dropdown backdrop="blur" className="bg-[#16191C]">
            <DropdownTrigger>
              <Button isIconOnly>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Open Menu">
              <DropdownItem key="new" textValue="Chats" className="text-white">
                <h1 onClick={props.onOpenChatsMenu}>Chats</h1>
              </DropdownItem>
              <DropdownItem key="new3" textValue="Group Members" className="text-white">
                <h1 onClick={props.onOpenGroupMenu}>Group Members</h1>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default GroupHeaderMobile;
