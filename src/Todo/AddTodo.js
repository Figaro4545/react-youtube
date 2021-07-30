import React, {useState} from 'react';
import PropTypes from 'prop-types'



function AddTodo({onCreate}) { // для параметра onCreate импортируем PropTypes
    const [value, setValue] = useState('')

    function submitHandler(event) {
        // отменяем дефолтное поведение, чтобы страница не перезагружалась
        event.preventDefault()

        // здесь сделаем небольшую валидацию
        //если индекс пустой - то ничего не будем делать
        if(value.trim()) {  // удаляем лишние пробелы
            onCreate(value) // придумываем метод для передачи, его пердадим как параметр AddTodo
            setValue('')

        }

    }

    return(
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired

}

export default AddTodo