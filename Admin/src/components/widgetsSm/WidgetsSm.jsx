import "./widgetSm.css"

import React from 'react'

export default function WidgetsSm() {
  return (
    <div className="widgetsSm">
      <span className="WidgetsSmTitle">New Join Members</span>
      <ui className="WidgetsSmList">
        <li className="WidgetsSmListItems">
            <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="WidgetsSmImg"/>
            <div className="WidgetsSmUSer">
                <span className="WidgetsSmUsername">Anna keller</span>
                <span className="WidgetsSmUserTitle">Software Engineer</span>
            </div>
        </li>
      </ui>
    </div>
  )
}

