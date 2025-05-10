import styles from "./Guestpage.module.css";
import logo from "../assets/logo.png"
import avatar from "../assets/avatar.png"
import backbutton from "../assets/backbuttonSVG.png"
import demo from "../assets/demo.png"
import vector from "../assets/Vector.png"
import svg from "../assets/SVG.png"
import svg1 from "../assets/SVG (1).png"
import svg2 from "../assets/SVG (2).png"
import svg3 from "../assets/SVG (3).png"
import svg10 from "../assets/SVG (10).png"
import svg11 from "../assets/SVG11.png"
import svg12 from "../assets/SVG (4).png"
import svg13 from "../assets/SVG (5).png"
import svg14 from "../assets/SVG 6.png"
import svg15 from "../assets/SVG 7.png"
import svg16 from "../assets/SVG (8).png"
import svg17 from "../assets/SVG (9).png"
import hoomans from "../assets/hoomans.png"
import insta from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import x from "../assets/x.png"
import telegram from "../assets/telegram.png"








const Guestpage = () => {
  return (
    <body>
    <div className={styles.heading}>
      <div className={styles.left}>
        <img src={logo} className={styles.logo} />
        <p className={styles.title}>MakeMyPass</p>
        </div>
        <div className={styles.profile}>
            <div className={styles.email}>Hi, adnankattekaden43</div>
            <img src={avatar} className={styles.pfp}/>
        </div>
    </div>
    <div className={styles.secrow}>
    <div className={styles.btntrnsp} >
      <img src={backbutton} className={styles.btnarrow}/>
    </div>
    <img src={demo} className={styles.demo} />
    <h2>Paradox Productions Meet-Up</h2>
    <div className={styles.secright}>
      <img src={vector} className={styles.vector} />
      <p className={styles.text}>View Docs</p>
    </div>
    </div>
    <div className={styles.thirdrow}>
      <p className={styles.thrdrowtxt}>Overview</p>
      <p className={styles.thrdrowtxt}>Insights</p>
      <p className={styles.thrdrowtxt}>Guests</p>
      <p className={styles.dash}>|</p>
      <p className={styles.thrdrowtxt}>Event Page</p>
      <p className={styles.thrdrowtxt}>Form Builder</p>
      <p className={styles.dash}>|</p>
      <p className={styles.thrdrowtxt}>Scan QR</p>
      <p className={styles.thrdrowtxt}>In-Event</p>
      <p className={styles.dash}>|</p>
      <p className={styles.thrdrowtxt}>Logs</p>
      <p className={styles.thrdrowtxt}>Finance</p>
      <p className={styles.dash}>|</p>
      <p className={styles.thrdrowtxt}>Post Event</p>
      <p className={styles.dash}>|</p>
      <p className={styles.thrdrowtxt}>Child Events</p>
    </div>
    <div className={styles.frthrow}>
      <p className={styles.glance}>At a Glance</p>
      <p className={styles.date}>Last Registered 1st May at 7:42 PM</p>
    </div>
    <div className={styles.fifrow}>
      <div className={styles.fifrowl}>
    <p className={styles.number1}>80</p>
    <p className={styles.label}>unique guests</p>
    </div>
    <div className={styles.fifrowr}>
      <p className={styles.number2}>59</p>
      <p className={styles.label}>shortlisted</p>
      <p className={styles.number2}>11</p>
      <p className={styles.label}>unclaimed</p>
    </div>
    </div>
    <div className={styles.sixrow}>
      <div className={styles.violet}></div>
      <div className={styles.green}> </div>
      <div className={styles.white}> </div>
      <div className={styles.blue}> </div>
    </div>
    <div className={styles.svnrow}>
      <p className={styles.lblv}>• (280) Special Ticket</p>
      <p className={styles.lblg}>• (3) Demo Paid Ticket</p>
      <p className={styles.lblw}>• (4) Hackathon</p>
      <p className={styles.lblb}>• (50) New Ticket</p>
    </div>
    <div className={styles.egtrow}>
      <div className={styles.btn}>
        <p className={styles.txt}>Dropped Users</p>
        <img src={svg}  className={styles.icon}/>
      </div>
      <div className={styles.btn}>
        <p className={styles.txt}>Blacklisted Users</p>
        <img src={svg1} className={styles.icon}/>
      </div>
      <div className={styles.btn}>
        <p className={styles.txt}>Export Data</p>
        <img src={svg2} className={styles.icon}/>
      </div>
      <div className={styles.btn}>
        <p className={styles.txt}>Add Guest</p>
        <img src={svg3} className={styles.icon}/>
      </div>
    </div>
    <div className={styles.ninerow}>Guests List</div>
    <div className={styles.tenrow}>
      <img src={svg10} className={styles.searchicon} />
      <input type="text" placeholder="Search" />
    </div>
    <div className={styles.lvnrow}>
      <div className={styles.lft}>
      <p>Recent Guests(30)</p></div>

      <div className={styles.rght}>
        <div className={styles.sm}>
          <p>Select Multiple</p>
        </div>
        <div className={styles.ci}>
          <div className={styles.cp1}>Checked In</div>
          <div className={styles.cp2}>|</div>
          <img src={svg11} />
        </div>
         <div className={styles.as}>
          <div className={styles.ap1}>Approval Status</div>
          <div className={styles.ap2}>|</div>
          <img src={svg11} />
          </div>
           <div className={styles.rs}>
          <div className={styles.rp1}>Registration Status</div>
          <div className={styles.rp2}>|</div>
          <img src={svg11} />
        </div>
      </div>
      </div>
      <div className={styles.twlrow}>
        <div className={styles.twlfirst}>
          <div className={styles.firstleft}>
            <div className={styles.name}>Ananthu M P</div>
            <div className={styles.email1}>chn21ec019</div>
          </div>
          <div className={styles.firstright}>
          <div className={styles.days}>5 days ago</div>
          <img src={svg12}  className={styles.svg12}/>
          <img src={svg13}  className={styles.svg12}/>
          <img src={svg14}  className={styles.svg12}/>
          <img src={svg15}  className={styles.svg12}/> 
          </div>
        </div>
        <div className={styles.twlsecond}>
          <div className={styles.firstleft}>
            <div className={styles.name}>Aro Ann</div>
            <div className={styles.email1}>Aroann23</div>
          </div>
          <div className={styles.firstright}>
          <div className={styles.days}>1 week ago</div>
          <img src={svg12}  className={styles.svg12}/>
          <img src={svg13}  className={styles.svg12}/>
          <img src={svg14}  className={styles.svg12}/>
          <img src={svg15}  className={styles.svg12}/> 
          </div>
        </div>
        <div className={styles.twlsecond}>
          <div className={styles.firstleft}>
            <div className={styles.name}>Ananthu M P</div>
            <div className={styles.email1}>chn21ec019</div>
          </div>
          <div className={styles.firstright}>
          <div className={styles.days}>2 weeks ago</div>
          <img src={svg12}  className={styles.svg12}/>
          <img src={svg13}  className={styles.svg12}/>
          <img src={svg14}  className={styles.svg12}/>
          <img src={svg15}  className={styles.svg12}/> 
          </div>
        </div>
        <div className={styles.twlsecond}>
          <div className={styles.firstleft}>
            <div className={styles.name}>Ananthu M P</div>
            <div className={styles.email1}>ananthu.mp333</div>
          </div>
          <div className={styles.firstright}>
          <div className={styles.days}>2 weeks ago</div>
          <img src={svg12}  className={styles.svg12}/>
          <img src={svg13}  className={styles.svg12}/>
          <img src={svg14}  className={styles.svg12}/>
          <img src={svg15}  className={styles.svg12}/> 
          </div>
        </div>
        <div className={styles.twlsecond}>
          <div className={styles.firstleft}>
            <div className={styles.name}>Ananthu M P</div>
            <div className={styles.email1}>chn21ec019</div>
          </div>
          <div className={styles.firstright}>
          <div className={styles.days}>2 weeks ago</div>
          <img src={svg12}  className={styles.svg12}/>
          <img src={svg13}  className={styles.svg12}/>
          <img src={svg14}  className={styles.svg12}/>
          <img src={svg15}  className={styles.svg12}/> 
          </div>
        </div>
        <div className={styles.twlsecond}>
          <div className={styles.firstleft}>
            <div className={styles.name}>Aswin Asok</div>
            <div className={styles.email1}>aswinasokofficial</div>
          </div>
          <div className={styles.firstright}>
          <div className={styles.days}>4 weeks ago</div>
          <img src={svg12}  className={styles.svg12}/>
          <img src={svg13}  className={styles.svg12}/>
          <img src={svg14}  className={styles.svg12}/>
          <img src={svg15}  className={styles.svg12}/> 
          </div>
        </div>
        <div className={styles.twlsecond}>
          <div className={styles.firstleft}>
            <div className={styles.name}>Ananthu M P</div>
            <div className={styles.email1}>chn21ec019</div>
          </div>
          <div className={styles.firstright}>
          <div className={styles.days}>4 weeks ago</div>
          <img src={svg12}  className={styles.svg12}/>
          <img src={svg17}  className={styles.svg12}/>
          <img src={svg14}  className={styles.svg12}/>
          <img src={svg16}  className={styles.svg12}/> 
          </div>
        </div>
        <div className={styles.twlsecond}>
          <div className={styles.firstleft}>
            <div className={styles.name}>Aswin Asok</div>
            <div className={styles.email1}>aswinasokofficial</div>
          </div>
          <div className={styles.firstright}>
          <div className={styles.days}>4 weeks ago</div>
          <img src={svg12}  className={styles.svg12}/>
          <img src={svg17}  className={styles.svg12}/>
          <img src={svg14}  className={styles.svg12}/>
          <img src={svg15}  className={styles.svg12}/> 
          </div>
        </div>
        <div className={styles.twlsecond}>
          <div className={styles.firstleft}>
            <div className={styles.name}>Ananthu M P</div>
            <div className={styles.email1}>ananthunandu.magic</div>
          </div>
          <div className={styles.firstright}>
          <div className={styles.days}>5 weeks ago</div>
          <img src={svg12}  className={styles.svg12}/>
          <img src={svg13}  className={styles.svg12}/>
          <img src={svg14}  className={styles.svg12}/>
          <img src={svg15}  className={styles.svg12}/> 
          </div>
        </div>
      </div>
      <div className={styles.thirteenrow}>
        <div className={styles.leftteen}>
          69 Records
        </div>
        <div className={styles.mid}>
          <div className={styles.leftteen}>Per Page: </div>
          <div className={styles.box}>
            <div className={styles.leftteen}>30</div>
          </div>
        </div>
        <div className={styles.rightteen}>
          <div className={styles.leftteen}>1 of 3</div>
          <div className={styles.box1}>
            <div className={styles.leftteen}>
            &lt;
            </div>
          </div>
          <div className={styles.box2}>
            <div>
              &gt;
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fifteenrow}>
        <div>
          <img src={hoomans} className={styles.hoomans}/>
        </div>
        <div>
          <img src={insta}  className={styles.social}/>
          <img src={linkedin} className={styles.social}/>
          <img src={x} className={styles.social}/>
          <img src={telegram} className={styles.social}/>
        </div>
      </div>
    </body>
  )
}

export default Guestpage