import React, {Component} from 'react'
import styles from './FileList.css'
import File from './File'
// var fs = require('fs')
// var path = require('path')


class FileList extends Component {

	render() {

		// const {fileStructure} = this.props
		// var dirs = this.getBlooprints(fileStructure.blooprints)
		// const dirnames = dirs.map((dir,i) =>
		//   	<File title={dir} key={i} fileStructure={fileStructure} {...this.props} />
		// )
		//
		// return(
		// 	<div className={styles.files}>
		// 		{dirnames}
		// 	</div>
		// )
		return null
	}

	getBlooprints (srcpath) {
		// return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
	}
}

export default FileList
