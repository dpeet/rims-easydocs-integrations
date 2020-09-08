import React, {useState} from 'react';
// import logo from './logo.svg';
import AGLogo from './svg/AG Logo.svg';
import bookmark from './svg/bookmark_border.svg';
import find from './svg/find_in_page.svg';
import notification from './svg/notifications.svg';
import account from './svg/account_circle.svg';
import more_menu from './svg/more_vert.svg';
import App_Switcher from './svg/menu_app_switcher.svg'
import './App.scss';
import Input from "./components/Input/input";
import MenuItem from './components/MenuItem/menuitem'
import Tree from './components/Tree/Tree'
import TreeFolder from './components/Tree/TreeFolder'
import TreeFile from './components/Tree/TreeFile'
import ContentHeader from "./components/FormElements/ContentHeader";
import RIMSDetailPanel from "./components/RIMS_Detail_Panel/RIMSDetailPanel";


function App() {
  const [selectedTree, setTreeSelection] = useState("");

  return (
    <div className="App">
      <div className="header">
        <div className="Left header" style={{justifyContent:"flex-start"}}>
          <img src={AGLogo} style={{height: "40px", marginLeft: "12px"}} alt="AG Logo" />
          <div>ArisGlobal RIMS</div>
          <img src={App_Switcher} style={{marginLeft: "12px"}} alt="AG Logo"/>
          <div className="header-text" style={{marginLeft:"8px"}}> Apps</div>
        </div>
        <div className="Middle header" style={{justifyContent:"center"}}>
          <Input className="input" label="Search"/>
        </div>
        <div className="Right header" style={{justifyContent:"flex-end"}}>
          <img src={bookmark} alt="Logo" />
          <img src={find} alt="Logo" />
          <img src={notification} alt="Logo" />
          <img src={account} alt="Logo" />
          <img src={more_menu} alt="Logo" />
        </div>
        </div>
        <div className="menu">
          <MenuItem text="Home"/>
          <MenuItem text="Regulatory Data"/>
          <MenuItem text="Lifecycle"/>
          <MenuItem text="Content Management" />
          <MenuItem text="Compliance"/>
          <MenuItem text="Reporting"/>
          <MenuItem text="Administration" selected="true"/>
          <MenuItem text="Codelist"/>
        </div>      
        <div className="breadcrumbs" ><span className="breadcrumb">Home</span> {">"} <span className="breadcrumb">Dossier Template</span></div>
        <div className="main-container">
          <span className="title">Example eCTD Template</span>
          <ContentHeader className="top-header" text="General Information" />
          <ContentHeader className="top-header"  text="Additional Information" />
          <ContentHeader className="top-header"  text="Dossier Template Structure" />
          <div style={{display:"flex", marginLeft:"12px", marginBottom:"8px"}}>
            <Input label="Search"/>
            <Input label="Filter"/>
          </div>
          <div style={{display:"flex"}}>
            <Tree>
              <TreeFolder name="M1 Cover" selectTree={setTreeSelection} level={0} >

              </TreeFolder>
              <TreeFolder name="M2 Common Technical Document Summaries" selectTree={setTreeSelection} level={1}>
                <TreeFolder name="2.2 Introduction" selectTree={setTreeSelection} level={1}></TreeFolder>
                <TreeFolder name="2.3 Overall Quality Summary" selectTree={setTreeSelection} level={1}>
                  <TreeFolder name="2.3 Introduction" selectTree={setTreeSelection} level={2}></TreeFolder>
                  <TreeFolder name="2.3.S Drug Substance" selectTree={setTreeSelection} level={2}>
                    <TreeFolder name="2.3.P Drug Product" selectTree={setTreeSelection} level={3}>
                      <TreeFolder name="2.3.P Crocin 500mg [ Crocin 500mg no flavo..." level={4}></TreeFolder>
                    </TreeFolder>

                  </TreeFolder>
                  <TreeFolder name="2.3.A Drug Appendicies" selectTree={setTreeSelection} level={2}></TreeFolder>
                  <TreeFolder name="2.3.R Regional Information" selectTree={setTreeSelection} level={2}>
                    <TreeFile name="2.3.R Regional Info 1.pdf" level={4}>
                      <TreeFile name="2.3.R Regional Info 1.pdf [v1.1] [s0003]" level={4}></TreeFile>
                    </TreeFile>
                    <TreeFile name="2.3.R Regional Info 2.pdf" level={4}></TreeFile>
                    <TreeFile name="2.3.R Regional Info 3.pdf" level={4}></TreeFile>
                    <TreeFile name="2.3.R Regional Info 4.pdf" level={4}></TreeFile>

                  </TreeFolder>
                </TreeFolder>

              </TreeFolder>
              <TreeFolder name="M3 Quality" selectTree={setTreeSelection}></TreeFolder>
              <TreeFolder name="M4 Nonclinical Study Reports"  level={0}>
                <TreeFolder name="4.2 Study Reports" selectTree={setTreeSelection} level={1}>
                  <TreeFolder name="3.2.1 Study 0001" selectTree={setTreeSelection} level={2}>
                    <TreeFile name="Example.pdf" selectTree={setTreeSelection} level={3}/>
                  </TreeFolder>
                </TreeFolder>
                <TreeFolder name="4.3 Pharmacology" selectTree={setTreeSelection} level={1}>

                </TreeFolder>
                </TreeFolder>
            </Tree>
            <RIMSDetailPanel name={selectedTree} />
          </div>

        </div>
    </div>
  );
}

export default App;
