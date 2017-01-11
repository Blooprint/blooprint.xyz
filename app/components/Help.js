import React, {Component} from 'react'
import styles from './Help.css'

class Help extends Component {

	constructor(props){
        super(props)
    }

    render() {
		return (
			<div className={styles.help}>
				<h1 className={styles.comp}>Design Help</h1>
				<h4>add BLIP by DOUBLE CLICKING anywhere</h4>
				<h4>select marker color by typing:</h4>
				<p><span className={styles.red}>red</span>{' '}
				<span className={styles.green}>green</span>{' '}
				<span className={styles.blue}>blue</span>{' '}
				<span className={styles.orange}>orange</span>{' '}
				<span className={styles.gray}>gray</span>{' '}
				<span className={styles.brown}>brown</span>{' '}
				<span className={styles.black}>black</span></p>
				<h4>set pending action by typing a number:</h4>
				<p>BLOOP-<span className={styles.num}>1</span> BLIP-<span className={styles.num}>2</span> ERASE-<span className={styles.num}>3</span> CALIBRATE-<span className={styles.num}>4</span></p>
				<h4>trigger pending action: CTRL-SPACE</h4>
				<h4>toggle title block:  ></h4>
			</div>
		)
	}
}

export default Help