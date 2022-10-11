import React, {useContext, useEffect} from 'react'
import MonacoEditor from '@uiw/react-monacoeditor'
import './styles/code.scss'
import { ElementContext } from '../../../utils/elementContext'
const Code = () => {

  const {codeNavData, codeCodeData} = useContext(ElementContext)
  const [navData, setNavData] = codeNavData
  const [codeData, setCodeData] = codeCodeData

  useEffect(() => {
    console.log(codeData); 
  }, [codeData])

  return (
    <div className='codec-container'>
      <MonacoEditor
        language="mysql"
        width={'100%'}
        value={navData}
        options={{
          theme: 'vs',
          minimap: null,
          selectionClipboard: true,
          smartSelect: true,
          snippetSuggestions: 'bottom',
          renderLineHighlightOnlyWhenFocus: true,
          cursorSmoothCaretAnimation: true,
          formatOnPaste: true,
          formatOnType: true,
        }}
        onChange={(newValue, e) => {
          setCodeData(newValue)
        }}
      />
    </div>
  )
}

export default Code
