import React, {useState} from 'react';
import './tree.scss'
import pdf from '../../svg/file-pdf.svg'
import classnames from "classnames";

const TreeFile = ({name, level}) => {
    const [isHovering, setHover] = useState(false);

    const treePadding = {
        marginLeft: 24
    };

    let treeClass = classnames({
        tree : true,
        'tree-file' : true,
        hovering : isHovering,
    });
    let treeFileIconClass = classnames({
        'tree-file-icon' : true,
        'icon-hovering' : isHovering,
    });


    return (
        <div className={treeClass} style={treePadding}
             onMouseEnter={() => setHover(true)}
             onMouseLeave={() => setHover(false)}
        >
            <img className={treeFileIconClass} src={pdf} alt="Logo"></img>
            <span>{name}</span>
        </div>
    );
};

export default TreeFile