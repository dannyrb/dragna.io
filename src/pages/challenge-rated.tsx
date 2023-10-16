import React, { useEffect, useState} from 'react';
import Head from 'next/head'
import queryString from 'query-string';
// import { Inter } from 'next/font/google'

import Banner from '@/components/Banner/Banner'
import Container from '@/components/Container/Container';
import Drawer from '@/components/Drawer/Drawer';
import EncounterCalculator from '@/lib/EncounterCalculator';
import CardBuildYourParty from '@/components/PageHome/CardBuildYourParty/CardBuildYourParty';
import CardBuildYourEncounter from '@/components/PageHome/CardBuildYourEncounter/CardBuildYourEncounter';

import Theme from '@/layouts/Theme'
import styles from './challenge-rated.module.css';
import { GetServerSideProps } from 'next';


// const inter = Inter({ subsets: ['latin'] });
const _encounterCalculator = new EncounterCalculator();

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async(context) => {
  const search = context.query
  const parsedAllies = 
    search.allies !== undefined && !Array.isArray(search.allies) 
      ? search.allies.split(',') 
      : [];
  const parsedEnemies = 
    search.enemies !== undefined && !Array.isArray(search.enemies) 
      ? search.enemies.split(',') 
      : [];

  let allies: number[] = [];
  let enemies: number[] = [];

  allies = parsedAllies
    .filter((cr): cr is string => typeof cr === "string")
    .map((cr: string) => parseFloat(cr as string));

  enemies = parsedEnemies
    .filter((cr): cr is string => typeof cr === "string")
    .map((cr: string) => parseFloat(cr as string));


  const queryParams = {
    partySize: search.partySize !== undefined ? Number(search.partySize) : 0,
    partyAverageLevel: search.partyAverageLevel !== undefined ? Number(search.partyAverageLevel) : 0,
    enemies,
    allies,
  }

  return { props: { 
    queryParams,
    initialIsExpanded: !(queryParams.partySize > 0 && queryParams.partyAverageLevel > 0)
  } }
}

type ssrProps = {
  queryParams: {
    partySize: number;
    partyAverageLevel: number;
    enemies: number[];
    allies: number[];
  },
  initialIsExpanded: boolean
} 

export default function Home({ queryParams, initialIsExpanded }: ssrProps) {
  const [partySize, setPartySize] = useState(queryParams.partySize);
  const [partyAverageLevel, setPartyAverageLevel] = useState(queryParams.partyAverageLevel);
  const [creatureToggle, setCreatureToggle] = useState(0);
  const [enemies, setEnemies] = useState<number[]>(queryParams.enemies);
  const [allies, setAllies] = useState<number[]>(queryParams.allies);
  const [isExpanded, setIsExpanded] = useState(initialIsExpanded);

  useEffect(() => {
    // if(typeof window === 'undefined') return;

    // Update URL
    if(partySize > 0 || partyAverageLevel > 0 || enemies.length > 0 || allies.length > 0) {

      const { protocol, host, pathname } = window.location;
      const paramString = queryString.stringify({
        partySize: partySize === 0 ? undefined : partySize,
        partyAverageLevel: partyAverageLevel === 0 ? undefined : partyAverageLevel,
        enemies,
        allies,
      }, {arrayFormat: 'comma'});

      const url = new URL(
        `${protocol}${host}${pathname}?${paramString}`
      );

      history.replaceState(null, '', url);
    } else {
      const { protocol, host, pathname } = window.location;
      const url = new URL(
        `${protocol}${host}${pathname}`
      );

      history.replaceState(null, '', url);
    }
  }, [partySize, partyAverageLevel, enemies, allies]);

  useEffect(() => {
    if(queryParams.partySize > 0 && queryParams.partyAverageLevel > 0) {
      setIsExpanded(false);
    }
  }, []);

  //
  const { hpLost, resourcesSpent, encounterDifficulty } = _encounterCalculator.recalculateDifficulty(partyAverageLevel, partySize, enemies, allies);

  function addCreature(challengeRating: number) {
    if (creatureToggle === 0) {
      setEnemies([...enemies, challengeRating]);
    } else {
      setAllies([...allies, challengeRating]);
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Theme>
        <main style={{ marginTop: '53px'}}>
          <div style={{ padding: '16px'}}>
          {/* <Banner /> */}

          <section>
            <Container>
              <CardBuildYourParty
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
                partySize={partySize}
                setPartySize={setPartySize}
                partyAverageLevel={partyAverageLevel}
                setPartyAverageLevel={setPartyAverageLevel}
              />
            </Container>
          </section>

          <section>
            <Container>
              <CardBuildYourEncounter
                addCreature={addCreature}
                creatureToggle={creatureToggle}
                setCreatureToggle={setCreatureToggle}
                enemies={enemies}
                setEnemies={setEnemies}
                allies={allies}
                setAllies={setAllies}
              />
            </Container>
          </section>


          <section>
            <Container>
              {/* <Drawer> */}
              {/* Card 3 - Encounter Summary */}
                <div style={{ margin: '1rem' }}>
                  <h2>Encounter Summary</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

                <div style={{ flexGrow: 1 }}>
                  <div style={{ margin: '.75rem' }}>
                    <p style={{ fontWeight: '700'}}>Party:</p>
                    <p><DynamicText>{partySize}</DynamicText> PCs at Level <DynamicText>{partyAverageLevel}</DynamicText></p>
                  </div>
                  <div style={{ margin: '1rem' }}>
                    <p style={{ fontWeight: '700'}}>Difficulty</p>
                    <p><DynamicText>{encounterDifficulty}</DynamicText></p>
                  </div>
                  <div style={{ margin: '1rem' }}>
                    <p style={{ fontWeight: '700'}}>HP Loss</p>
                    <p>
                      <DynamicText>{Math.round(hpLost)}</DynamicText>%
                      of the party&#39;s combined maximum hit points
                    </p>
                  </div>
                  <div style={{ margin: '1rem' }}>
                    <p style={{ fontWeight: '700'}}>Resources Spent</p>
                    <p>
                      <DynamicText>{Math.round(resourcesSpent)}</DynamicText>%
                      of the party&#39;s combined daily features and resources
                    </p>
                  </div>
                </div>
                
                  
                  {/* Left */}
                  <div style={{ flexGrow: 1 }}>
                    {/* <button>Start Over</button>
                    
                    <div>
                      <div>Share this encounter:</div>
                      <div style={{}}>
                        <input 
                          type="text" 
                          value={'https://dragna.io/challenge-rated?'} 
                        />
                        <button></button>
                        
                      </div>
                    </div> */}
                  </div>

                </div>
              {/* </Drawer> */}
            </Container>
          </section>

          {/* </Drawer> */}
          </div>
        </main>
        
      </Theme>
    </>
  )
}

type DynamicTextProps = {
  children: React.ReactNode;
}

function DynamicText({children}: DynamicTextProps) {
  return (
    <span className={styles.textDynamic}>
      {children}
    </span>
  )
}