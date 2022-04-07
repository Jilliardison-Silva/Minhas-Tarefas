import React from 'react';
// import DarkButton from './DarkButton';


const Header = ({title, darkModeClick}) => {
    return ( 
        <>
            <div className="header-container" style={{
                width: '95%',
                display: 'flex',
                flexWrap: 'wrap',
            }}>
                <h1 style={{color:'#eee',width:'85%'}}>{title}</h1>
                {/* <div className="darkButton" style={{marginTop:'-20px'}}>
                    <DarkButton darkModeClick={darkModeClick} />
                </div> */}
                
            </div>
        </>        
    
    );
}
 
export default Header;