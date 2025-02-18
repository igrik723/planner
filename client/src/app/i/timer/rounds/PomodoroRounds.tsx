
import cn from 'clsx'
import { IPomodoroRoundResponse } from '@/types/pomodoro.types'
import styles from './PomodoroRound.module.scss'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface IPomodoroRounds {
    rounds: IPomodoroRoundResponse[] | undefined
    nextRoundHendler: () => void
    prevRoundHendler: () => void
    activeRound: IPomodoroRoundResponse | undefined

}

export function PomodoroRounds({
    rounds,
    nextRoundHendler,
    prevRoundHendler,
    activeRound
}: IPomodoroRounds) {
    const isCanPrevRound = rounds 
        ? rounds.some(round => round.isCompleted)
        : false
    
    const isCanNextRound = rounds ? !rounds[rounds.length - 1].isCompleted : false 

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={!isCanPrevRound}
                onClick={() => (isCanPrevRound ? prevRoundHendler() : false)}
            >
                <ChevronLeft size={23}/>
            </button>
            <div className={styles.roundsContainer}>
                {rounds &&
                    rounds.map((round, index) => (
                        <div
                            key={index}
                            className={cn(styles.round, {
                                [styles.completed]: round.isCompleted,
                                [styles.active]: round.id === activeRound?.id && !round.isCompleted
                            })}
                        />
                    ))
                }
            </div>
            <button
                className={styles.button}
                disabled={!isCanNextRound}
                onClick={() => (isCanNextRound ? nextRoundHendler() : false)}
            >
                <ChevronRight size={23} />
            </button>
        </div>
    )
}