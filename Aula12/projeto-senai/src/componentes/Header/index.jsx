import MenuHamburguer from '././assets/menu.svg'; 
import LogoSenai from '././assets/logo-senai.png';
import Login from '././assets/login.svg';
import Pesquisa from '././assets/search.svg';
import './styles.css';

export default function Header() {
  return (
    <div className='cabecalho'>
    <img src={MenuHamburguer} alt="Menu Hamburguer" />
    <img src={LogoSenai} alt="Logotipo do Senai" />
    <img src={Login} alt="Icone de Login" />
    <img src={Pesquisa} alt="Icone de Pesquisa" />        
    </div>
  )
}   