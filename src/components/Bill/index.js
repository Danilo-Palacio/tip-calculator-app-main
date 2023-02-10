import './Bill.css'

const Bill = (props) => {
    const colorBgInput = { backgroundColor:props.color.veryLightGrayishCyan}
    const colorFont = {color:props.color.darkGrayishCyan}

    return (

        <div className='bill'>
            <label for="input" style={colorFont}> Bill </label>        
            <div className='input'  style={colorBgInput}>
                <span style={colorFont}>$</span>
                <input type="number" name="number-bill" id="number-bill"  style={colorBgInput}/>
            </div>
        </div>
    )

}

export default Bill