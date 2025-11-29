import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const itens = [
    { 
        title: "Dashboard",
        content: [{title:"Home", route:"/"}]
    },
    { 
        title: "Configurações",
        content: [{title:"Perfil", route:"/perfil"}]
    },    
    { 
        title: "Utilitários",
        content: [{title:"Relatórios", route: "/relatorios"}]
    }
]

export default function Siderbar ({ isOpen, closeSidebar}){
    const [openIndex, setOpenIndex] = useState(null);
    const handleToggleItem = (index) => {
                setOpenIndex((prev) => (prev === index ? null : index));
    }
    return (
        <aside className={`sidebar ${isOpen ? "sidebar-open":""}`}>
            <nav className='sidebar-nav'>{
                    itens.map ((itens,index) => (                       
                        <div className='accordion-item' key={itens.title}>
                            <button className='accordion-header'
                             onClick={() => handleToggleItem(index)}
                            >
                                <span>{itens.title}</span>
                                <span>{openIndex === index ? "-":'+'}</span>

                            </button>
                            {
                                openIndex === index && (
                                    <ul className='accordion-content'>
                                        {
                                            itens.content.map((subItem) => (
                                                    <li key={subItem.title}>
                                                        <Link to={subItem.route}
                                                            className='accordion-link'
                                                            onClick={closeSidebar} >
                                                                {subItem.title}
                                                        </Link>                                                       
                                                    </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div> 
                    ))
            }
            </nav>
        </aside>
    )
}