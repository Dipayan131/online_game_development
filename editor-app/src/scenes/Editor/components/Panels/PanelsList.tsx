import * as React from 'react';
import { panelListItems } from '../../../../constants/app-options';
import useAppContext from '../../../../hooks/useAppContext';
import { styled } from 'baseui';
import PanelListItem from './PanelListItem';
import { TiThMenu } from "react-icons/ti";

const Container = styled('div', (props) => ({
  width: '84px',
  // backgroundColor: props.$theme.colors.primary100,
  display: 'flex',
  flexDirection:'column',
  // alignItems:'center',
  // justifyContent:'center',
  backgroundColor:'#292929'
}));

function PanelsList() {
  const { activePanel } = useAppContext();
  const {panelStatus, setPanelStatus} = useAppContext();

  const handleTogglePanel = (value) => {
    setPanelStatus(!value);
  }
  return (
    <Container>
      <div style={{marginBottom:"200px", display:"flex", justifyContent:"center", cursor:"pointer", paddingTop:"15px"}} onClick={() => handleTogglePanel(panelStatus)}><TiThMenu size={25} /></div>
      {panelListItems.map((panelListItem) => (
        <PanelListItem
          label={panelListItem.name}
          name={panelListItem.name}
          key={panelListItem.name}
          icon={panelListItem.name}
          activePanel={activePanel}
        />
      ))}
    </Container>
  );
}

export default PanelsList;
