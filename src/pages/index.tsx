import Head from "next/head";
import React from "react";
import Theme from "../layouts/Theme";

function PageHome() {
    const title = `Dragna.io - D&D 5e Encounter Calculator`;
    const description =
      "Dracula is a color scheme for code editors and terminal emulators such as Vim, Notepad++, iTerm, VSCode, Terminal.app, ZSH, and much more.";

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="@dannyrb" name="author" />
          <meta content="https://dragna.io" property="og:url" />
          <meta
            content="https://dragna.io/static/img/facebook.png"
            property="og:image"
          />
        </Head>

        <Theme>
          <header className="header">
            {/* <img
              className="icon"
              src={`/static/icons/${this.props.query.icon}`}
              width={220}
              height={220}
              alt={'title'}
            /> */}
            <h1 className="title">Dragna.io</h1>
          </header>
        </Theme>
      </div>
    );
  }

export default PageHome;