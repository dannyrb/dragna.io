import React, { Component } from "react";
import Link from "next/link";
import malarkey from "malarkey";
import Topbar from "./Topbar";

interface THeader {
  malarkey: React.RefObject<HTMLSpanElement>;
}

class Header extends Component {
  constructor(props) {
    super(props);

    // this.malarkey = React.createRef();
  }

  componentDidMount() {
    // this.startTypewriter();
  }

  // startTypewriter() {
  //   malarkey(
  //     (text) => {
  //       if (!this.malarkey.current) return;
  //       this.malarkey.current.textContent = text;
  //     },
  //     {
  //       typeSpeed: 50,
  //       deleteSpeed: 50,
  //       pauseDuration: 2000,
  //       repeat: true,
  //     }
  //   )
  //     .type("Vim")
  //     .pause()
  //     .delete()
  //     .type("Zsh")
  //     .pause()
  //     .delete()
  //     .type("iTerm")
  //     .pause()
  //     .delete()
  //     .type("VSCode")
  //     .pause()
  //     .delete()
  //     .type("Terminal.app")
  //     .pause()
  //     .delete()
  //     .type("JetBrains")
  //     .pause()
  //     .delete()
  //     .type("Sublime")
  //     .pause()
  //     .delete()
  //     .type("Xcode")
  //     .pause()
  //     .delete()
  //     .type("Slack")
  //     .pause()
  //     .delete()
  //     .type("Telegram")
  //     .pause()
  //     .delete()
  //     .type("Emacs")
  //     .pause()
  //     .delete()
  //     .type("Windows Terminal")
  //     .pause()
  //     .delete();
  // }

  renderDescription() {
    return (
      <h2 className="subtitle">
        Dark theme for 
        {/* <span ref={this.malarkey} className="rotating"></span> */}
      </h2>
    );
  }


  render() {
    return (
      <div>
        <Topbar />
        <header className="header">
          {/* <img
            className="icon"
            src={`/static/icons/${this.props.query.icon}`}
            width={220}
            height={220}
            alt={'title'}
          /> */}
          <h1 className="title">Dragna.io</h1>
          {this.renderDescription()}
        </header>
      </div>
    );
  }
}

export default Header;