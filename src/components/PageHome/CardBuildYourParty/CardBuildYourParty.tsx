import React from 'react';
import RadioGrid from '@/components/RadioGrid/RadioGrid';
import RefreshIcon from '@/components/RefreshIcon/RefreshIcon';
import PartyLevelOptions from '@/lib/PartyLevelOptions';
import PartySizeOptions from '@/lib/PartySizeOptions';

import styles from './CardBuildYourParty.module.css';


type CardBuildYourPartyProps = {
    isExpanded: boolean;
    partySize: number;
    setPartySize: (value: number) => void;
    partyAverageLevel: number;
    setPartyAverageLevel: (value: number) => void;

}

function CardBuildYourParty({ 
    isExpanded, 
    partySize,
    setPartySize,
    partyAverageLevel, 
    setPartyAverageLevel 
}: CardBuildYourPartyProps
    ) {
    
    return(
        <>
        <div className={styles.cardTitleContainer}>
            <h2>Build Your Party</h2>
            <button
                className={styles.reset}
                onClick={() => {
                    setPartySize(0);
                    setPartyAverageLevel(0);
                }}
            >
                <RefreshIcon />
            </button>
        </div>

        <div className={`${styles.cardBody} ${isExpanded ? '' : styles.expanded}`}>
            <div style={{ margin: '1rem' }}>
                <RadioGrid 
                label="Select the number of players in your party."
                options={PartySizeOptions}
                onChange={(value) => setPartySize(value)}
                selectedValue={partySize}
                />
            </div>
            <div style={{ margin: '1rem' }}>
                <RadioGrid 
                label="Select your party's average level."
                options={PartyLevelOptions}
                onChange={(value) => setPartyAverageLevel(value)}
                selectedValue={partyAverageLevel}
                />
            </div>
        </div>
    </>
  );
}

export default CardBuildYourParty;