import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {


  const [posts, setPosts] = useState([])
  const [form, setForm] = useState(false)
  const [char, setChar] = useState(false)
  const [loading, setLoading] = useState(false)

  const [addPost, setAddPost] = useState({
    height: "",
    race: "",
    gender: "",
    birth: "",
    spouse: "",
    death: "",
    realm: "",
    hair: "",
    name: "",
    wikiUrl: ""
  })

  const getPosts = async () => {
    axios.get('http://localhost:8888/post')
      .then(res => {
        setPosts(res.data)
        setLoading(false)
      }).catch(error => { console.log({ msg: error }) })
  }

  const addData = (e, p) => {
    e.preventDefault();
    setLoading(true)
    axios.post('http://localhost:8888/post', addPost)
      .catch(error => {
        setLoading(false)
        console.log({ msg: error })
      })
  }

  const handleToggleForm = () => {
    setForm(!form)
    if (char) {
      setChar(!char)
    }
  }

  const handleToggleChar = () => {
    setChar(!char)
    if (form) {
      setForm(!form)
    }

  }

  const onInputChange = (e, p) => {
    setAddPost({
      ...addPost,
      [p]: e.target.value
    })
  }
  const deleteData = (id) => {
    axios.delete(`http://localhost:8888/deletePost/${id}`)
      .catch(error => { console.log({ msg: error }) })
  }

  useEffect(() => {
    getPosts()
  })

  const checkUp = (data) => {
    if (data !== '') {
      return data
    } else {
      return <span>Not available</span>
    }
  }

  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>Lord of the rings characters</h1>
        <div className='btnWrapper'>
          {loading ? <div style={{ color: '#fff' }}> Loading... </div> : <button className='btn new' onClick={() => handleToggleForm()}>Add a character</button>}

          <button className='btn show' onClick={() => handleToggleChar()}>Display Characters</button>
        </div>

        {form ?
          <form onSubmit={addData} >
            <h1>Add a new character!</h1>
            <div className='formWrapper'>
              <div className='wrap'>
                <div className='left'>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='name' onChange={e => onInputChange(e, 'name')} />
                  </div>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='height' onChange={e => onInputChange(e, 'height')} />
                  </div>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='race' onChange={e => onInputChange(e, 'race')} />
                  </div>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='gender' onChange={e => onInputChange(e, 'gender')} />
                  </div>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='birth' onChange={e => onInputChange(e, 'birth')} />
                  </div>
                </div>
                <div className='right'>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='spouse' onChange={e => onInputChange(e, 'spouse')} />
                  </div>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='death' onChange={e => onInputChange(e, 'death')} />
                  </div>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='realm' onChange={e => onInputChange(e, 'realm')} />
                  </div>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='hair' onChange={e => onInputChange(e, 'hair')} />
                  </div>
                  <div className='inputWrapper'>
                    <input type='text' placeholder='wiki url' onChange={e => onInputChange(e, 'wikiUrl')} />
                  </div>
                </div>
              </div>
              <div style={{ margin: 'auto' }}>
                {loading ? <div style={{ color: '#fff' }} ></div> : <button type='submit' className='btn add'>Add post</button>}
              </div>
            </div>
          </form>
          : ''}
        <div className='layout'>
          {posts.map((e, i) => {
            return (
              <div className='boxes'>
                {char ?
                  loading ? <div style={{ color: '#fff', textAlign: 'center' }}> Loading... </div> :
                    <div>
                      <ul className='infos' key={i}>
                        <li><h1>{checkUp(e.name)}</h1></li>
                        <li>Race : <span>{checkUp(e.race)}</span></li>
                        <li>Height : <span>{checkUp(e.height)}</span></li>
                        <li>Gender : <span>{checkUp(e.gender)}</span></li>
                        <li>Birth : <span>{checkUp(e.birth)}</span></li>
                        <li>Spouse : <span>{checkUp(e.spouse)}</span></li>
                        <li>Death : <span>{checkUp(e.death)}</span></li>
                        <li>Realm : <span>{checkUp(e.realm)}</span></li>
                        <li>Hair : <span>{checkUp(e.hair)}</span></li>
                        <li>Wiki Url : <span><a rel="noreferrer" target='_blank' href={e.wikiUrl}>{e.name}</a></span></li>
                      </ul>
                      <button onClick={() => deleteData(e._id)} className='btn delete'>Delete</button>
                    </div>
                  : ''}
              </div>
            )
          })}
        </div>
      </div>
    </div >
  );
}


export default App;
