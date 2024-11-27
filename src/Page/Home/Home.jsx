import React from 'react';
import '../Home/Home.css'
import logo from './logo.svg/Line.svg'
import LineLogo from './logo.svg/Line 2.svg'
import Collecsee from './logo.svg/Collecsee.svg'
import Photo from './img/Rectangle 10.png'


const Home = () => {
    return (
        <div className='Ves'>
            <div className="conteiner">
                <div className='nomber'>
                </div>
        <div className='imgF'>
            <img className='logoLine' src={logo} alt="" />
            <p className='LoremText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
        </div> 
         
        <div>
        <div className='Sezon'>
            <div className='h3div'>
                <h3 className='h3text'>СЕЗОН 2020/21</h3>
            </div>
            <div className='Linediv'>
                <img className='LineLogo' src={LineLogo} alt="" />
            </div>
            <div className='Time'>
                <div className='Timecol1'>
                </div>
                <div className='Timecol2'>
                </div>
                <div className='Timecol3'>
                </div>
            </div>
        </div>
        <div className='imgKatalog'></div>
                <button className='Catalogbtn'></button>
        </div>
        <div className='Photo1'>
            <img className='Photo10' src={Photo} alt="" />
        </div>
        <div className='Collection'>
            <img className='collecsee' src={Collecsee} alt="" />
        <div className='Line11'></div>
            <p className='elit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
            <button className='KolBtn'>ПОСМОТРЕТЬ КОЛЛЕКЦИЮ</button>
        </div>

        <div className='NewAdmission'>
            <h2 className='NewH2'>НОВЫЕ ПОСТУПЛЕНИЕ</h2>
            <div className='Line5'></div>
            <div className='NewAd'></div>
        </div>

        <div className='OurBrand'>
            <h2 className='brand'>НАШИ БРЕНДЫ</h2>
            <div className='Line7'></div>
            <div className='Brand7'></div>
        </div>
         
        <div className='info2'>
            <h3 className='AStore'>О МАГАЗИНЕ</h3>
            <p className='Lorem2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</p>
            <h3 className='endKategory'>КАТЕГОРИИ</h3>
            <div className='btnDiv'>
                <button className='time'>часы</button>
                <button className='broslet'>брослеты</button>
                <button className='remny'>ремни</button>
                <button className='ithdeli'>ювелирные изделия</button>
                <button className='zapony'>запонки</button>
            </div>
            <h3 className='razsylka'>РАССЫЛКА</h3>
            <p className='LoremEnd'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</p>
        </div>
        <div className='EndTest'></div>
        </div>
        </div>
    );
}

export default Home;
