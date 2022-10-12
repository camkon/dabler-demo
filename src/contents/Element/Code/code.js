import React, {useContext, useEffect, useRef} from 'react'
import MonacoEditor from '@uiw/react-monacoeditor'
import './styles/code.scss'
import { ElementContext } from '../../../utils/elementContext'

const Code = () => {

  const {codeNavData, codeCodeData} = useContext(ElementContext)
  const [navData, setNavData] = codeNavData
  const [codeData, setCodeData] = codeCodeData

  const codeRef = useRef()

  // useEffect(() => {
     
  // })

  return (
    <div className='codec-container'>
      <MonacoEditor
        ref={codeRef}
        language="javascript"
        width={'100%'}
        // value={navData}
        options={{
          theme: 'vs',
          snippetSuggestions: 'bottom',
          cursorSmoothCaretAnimation: true,
        }}
        editorDidMount={(editor, monaco) => {
          codeRef.editor = editor
          console.log(codeRef.editor);
        }} 
        onChange={(value, event) => {
          // setCodeData(value)
          var selection = codeRef.current.getSelection();
          var id = { major: 1, minor: 1 };             
          var text = `${navData}`;
          var op = {identifier: id, range: selection, text: text, forceMoveMarkers: true};
          codeRef.current.executeEdits("my-source", [op]);
        }}        
      />
    </div>
  )
}

export default Code
