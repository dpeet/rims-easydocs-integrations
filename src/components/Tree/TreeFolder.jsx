import React, {useState} from 'react';
import classnames from 'classnames';
import './tree.scss'
import folder_closed_svg from '../../svg/folder-nonempty.svg'
import folder_open_svg from '../../svg/folder-empty.svg'

const TreeFolder = ({level, children, name, selectTree }) => {
    const [isHovering, setHover] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [isSelected, setSelected] = useState(false);

    let childrenClass = classnames({
        collapsible : true,
        collapsed : !isOpen
    });
    let treeClass = classnames({
        tree : true,
        'tree-folder' : true,
    });
    let folderClass = classnames({
        'folder--label': true,
        hovering : isHovering,
        treeselected : isSelected

    });
    let treeFolderIconClass = classnames({
        'folder-icon' : true,
        'icon-hovering' : isHovering,
    });
    let folder_icon = folder_closed_svg
    if (isOpen) folder_icon = folder_open_svg
    const treePadding = {
        marginLeft: 24
    };
    return (
        <div className={treeClass} style={treePadding}>
            <div className={folderClass}
                 onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}

            >

                <img src={folder_icon}  onClick={ (e) => setOpen(!isOpen) } className={treeFolderIconClass} alt="Folder Icon" />
                <span onClick={() => {
                    if(isSelected) selectTree("");
                    if(!isSelected) selectTree(name);
                    setSelected(!isSelected);
                }}>{name}</span>
            </div>
            <div className={childrenClass} open={isOpen}>{children}</div>
        </div>
    );

}

export default TreeFolder;