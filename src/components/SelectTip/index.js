
import BtnSelectTip from '../BtnSelectTip'
import './SelectTip.css'

const SelectTip = (props) => {
    return(
        <div className='container'>
            <div>
                <h2>Select Tip %</h2>
                <section>
                    <BtnSelectTip value='5%'/>
                    <BtnSelectTip value='10%'/>
                    <BtnSelectTip value='15%'/>
                    <BtnSelectTip value='25%'/>
                    <BtnSelectTip value='50%'/>
                    <BtnSelectTip value='Custom'/>
                </section>
            </div>
        </div>
    )

}

export default SelectTip