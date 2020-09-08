import React, {useState} from 'react';
import classnames from 'classnames';
import Input from "../Input/input";
import "./RIMSDetailPanel.scss"
import ContentHeader from "../FormElements/ContentHeader";

const RIMSDetailPanel = ({name}) => {
    // const [isHovering, setHover] = useState(false);
    //
    // let childrenClass = classnames({
    //     collapsible : true,
    // });
    console.log(name)
    let emptyname = (name === "")
    return (
        <div className="RIMSDetailPanel" >
            <ContentHeader text="Basic Info" />
            {/*{isLoggedIn*/}
            {/*    ? <LogoutButton onClick={this.handleLogoutClick} />*/}
            {/*    : <LoginButton onClick={this.handleLoginClick} />*/}
            {/*}*/}
            <div className="input-group">
                <Input inputValue={name} label="Name" inactive={emptyname} />
                <Input label="Repeat On" inactive={emptyname}/>
                <Input label="File / Directory" inactive={emptyname}/>
                <Input label="Number" inactive={emptyname}/>
                <Input label="Element" inactive={emptyname}/>
                <Input label="Comment" inactive={emptyname}/>
            </div>




        </div>
    );

}

export default RIMSDetailPanel