import Topo from '../Componentes/Topo/';
import Rodape from '../Componentes/Rodape';
import Oreo from '../../assets/sabor-oreo.png';
import Pistache from '../../assets/sabor-pistache.png';
import CookieAvela from '../../assets/sabor-cookies-avela.png';
import SorbetKiwi from '../../assets/sorbet-kiwi.png';
import SorbetMorango from '../../assets/sorbet-morango.png';
import SorbetLimao from '../../assets/sorbet-limao.png';


import './style.css';

export default function Sabores() {

  return(
    <div>

      <Topo />

      <main>
        <section className="secao-banner-sabores">
          <div className="titulo-banner-sabores">
            <h1>NOSSOS SABORES</h1>
          </div>
        </section>

        <section className="limitar-secao secao-sabores">
          <h2>SABORES DE SORVETE</h2>
          <div className="container-sorvetes">
            <div className="box-sorvete">
              <img src={Oreo} alt="sorvete sabor oreo"/>
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
            <div className="box-sorvete">
              <img src={Pistache} alt="sorvete sabor pistache"/>
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
            <div className="box-sorvete">
              <img src={CookieAvela} alt="sorvete sabor cookie com avelã"/>
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
            <div className="box-sorvete">
              <img src={SorbetKiwi} alt="sorbet sabor kiwi"/>
              <h3>Sorvete de Kiwi</h3>
              <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
            </div>
            <div className="box-sorvete">
              <img src={SorbetMorango} alt="sorbet sabor morango"/>
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
            <div className="box-sorvete">
              <img src={SorbetLimao} alt="sorbet limão siciliano"/>
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
            </div>
          </div>
        </section>

      </main>

      <Rodape />

    </div>
  )
}