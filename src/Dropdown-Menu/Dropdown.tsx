import useToogle from '../custom-hooks/useToogle';
import { cloneElement, useRef } from 'react';
import React, { useEffect } from 'react';

export interface Props {
  children: React.ReactNode;
  title: React.ReactElement;
}
export const DropDown = ({ children, title }: Props) => {
  const [showMenu, toogleShowMenu] = useToogle(false);
  const [byBlur, toogleByBlur] = useToogle(false);
  const dropdownMenu = useRef<HTMLDivElement>(null);
  const dropdownButton = useRef(null);

  const handleBlur = (e: React.FocusEvent) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    toogleByBlur();
    toogleShowMenu();
    //The setTimeout is for prevent the bug with click and blur event
    setTimeout(toogleByBlur, 200);
  };

  const handleClick = () => {
    if (byBlur) return;
    toogleShowMenu();
  };

  useEffect(() => {
    if (!showMenu) return;
    if (!dropdownMenu.current) return;
    dropdownMenu.current.focus();
  }, [showMenu]);

  const titleElement = cloneElement(title);

  return (
    <>
      <div tabIndex={0} className="flex justify-center">
        <div onClick={handleClick} ref={dropdownButton} className="relative">
          {titleElement}
        </div>
        {showMenu && (
          <div
            ref={dropdownMenu}
            onBlur={handleBlur}
            tabIndex={0}
            className="flex flex-col bg-gray-300 p-2 absolute translate-y-1/3"
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDown;
