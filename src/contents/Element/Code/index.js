import Nav from './nav'
import Code from './code'
import Data from './data'
import './styles/index.scss'

const Element = () => {
    return(
        <div className='elements-container'>
            <div className="ele-top-container">
                <Nav />
                <Code />
            </div>
            <div className="ele-bottom-container">
                <Data />
            </div>
        </div>
    )
}

export default Element;