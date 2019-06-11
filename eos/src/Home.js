import React,{useState} from 'react'
import styles from './Home.module.css'
import logoImage from './assets/Logo_battle.png'
import modalImage from './assets/modal_image.png'
import "../node_modules/video-react/dist/video-react.css";
import { Player } from 'video-react';

const Home = (props)=>{
    const [activeButton,setActiveButton] = useState(null)

    function selectButton(choice){
        setActiveButton(choice)
    }
    return (
        <div className={styles.Home}>
            <div className={styles.Backdrop}></div>
            <div className={styles.logo}>
                <img src={logoImage}></img>
            </div>
            <div className={styles.modalImage}>
                {/* <img src={modalImage}></img> */}
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </div>
            <div className={styles.question_area}>
                <div className={styles.title}>
                    Question 1
                </div>
                <div className={styles.question}>
                    what is the symbol for EOS blockchain?
                </div>
                <div className={styles.choices}>
                    {/* <button onClick={()=>selectRange('1d')} className={activeRange==='1d'?styles.RangeChoiceActive:null}>1d</button> */}
                    <button onClick={()=>selectButton('1')} className={activeButton==='1'?styles.buttonActive:null}>Chesthedron</button>
                    <button onClick={()=>selectButton('2')} className={activeButton==='2'?styles.buttonActive:null}>Chesthedron</button>
                    <button onClick={()=>selectButton('3')} className={activeButton==='3'?styles.buttonActive:null}>Chesthedron</button>
                    <button onClick={()=>selectButton('4')} className={activeButton==='4'?styles.buttonActive:null}>Chesthedron</button>
                </div>
            </div>
        </div>
    )
}

export default Home