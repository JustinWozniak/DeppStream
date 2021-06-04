import React, {useEffect, useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { styled } from '@material-ui/core/styles';
const Hamburger = props => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const MyButton = styled(MenuIcon)({
        color: 'white',
        height: 48,
      });
  
    const updateMedia = () => {
      setDesktop(window.innerWidth > 500);
    };
    
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
  
    return (
      <div>
        {isDesktop ? "" : (
          <MyButton />
        )}
      </div>
    );
  }

  export default Hamburger;