import React, { Component, PropTypes } from 'react';
import {Header} from './common/mixin';

class demo extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="component_container index_module">
          <Header goback title='个人征信'/>
          <div className="demo_container">
             <ul className='ul_style'>
                    <li className='li_container'>
                        <span  className='iconBox'><i className="peopleIcon fgda"></i></span>
                        <span className='li_descript'>个人信息</span>
                        <span  className='li_descript rightAlign' style={{color: "#00AAE8"}}>免费查<i className="icon_jt2"></i></span>
                    </li>
                    <li className='li_container'>
                        <span  className='iconBox'><i className="peopleIcon menuicon"></i></span>
                        <span className='li_descript'>被执行人记录</span>
                        <span  className='li_descript rightAlign' style={{color: "#00AAE8"}}>免费查<i className="icon_jt2"></i></span>
                    </li>
                    <li className='li_container'>
                        <span  className='iconBox'><i className="peopleIcon sdf"></i></span>
                        <span className='li_descript'>失信行为记录</span>
                        <span  className='li_descript rightAlign' style={{color: "#9A9A9A"}}>无数据<i className="icon_jt2"></i></span>
                    </li>
                    <li className='li_container'>
                        <span  className='iconBox'><i className="peopleIcon msgsf"></i></span>
                        <span className='li_descript'>不良信息记录</span>
                        <span  className='li_descript rightAlign' style={{color: "#00AAE8"}}>免费查<i className="icon_jt2"></i></span>
                    </li>
                    <li className='li_container'>
                        <span  className='iconBox'><i className="peopleIcon moneyIcon"></i></span>
                        <span className='li_descript'>多方供贷记录</span>
                        <span  className='li_descript rightAlign' style={{color: "#00AAE8"}}>免费查<i className="icon_jt2"></i></span>
                    </li>
                    <li className='li_container'>
                        <span  className='iconBox'><i className="peopleIcon asfdffv"></i></span>
                        <span className='li_descript'>黑名单记录</span>
                        <span  className='li_descript rightAlign' style={{color: "#00AAE8"}}>免费查<i className="icon_jt2"></i></span>
                    </li>
              </ul>
          </div>
          <div className='submit' style={{margin: '2.5rem 0.75rem 0'}}>
              我的征信报告
          </div>
      </div>
    )
  }
}

export default demo;