import Editor, { Monaco, OnMount } from '@monaco-editor/react';
import { editor, languages } from 'monaco-editor';
import './styles/code.scss'
import { useEffect, useRef, useState, useContext } from 'react';
import { ElementContext } from '../../../utils/elementContext';

const Code = () => {

    const {codeNavData, codeCodeData} = useContext(ElementContext)
    const [navData, setNavData] = codeNavData
    const [codeData, setCodeData] = codeCodeData
	const [monacoInstance, setMonacoInstance] = useState()
    const codeRef = useRef()

    useEffect(() => {
        insertText(navData)
    }, [navData])

	const insertText = (text) => {
		if (monacoInstance) {
			const selection = monacoInstance.getSelection();
			const id = { major: 1, minor: 1 };
			const op = {
				identifier: id,
				range: {
					startLineNumber: selection?.selectionStartLineNumber || 1,
					startColumn: selection?.selectionStartColumn || 1,
					endLineNumber: selection?.endLineNumber || 1,
					endColumn: selection?.endColumn || 1,
				},
				text,
				forceMoveMarkers: true,
			};
			monacoInstance.executeEdits('my-source', [op]);
		}
	};

	// const editorMount: OnMount = (editorL: editor.IStandaloneCodeEditor) => {
	// 	setMonacoInstance(editorL);
	// };


	return(
        <div className="codec-container">
            <Editor
                height="100%"
                width="100%"
                defaultLanguage="mysql"
                onMount={(editor, monaco) => {
                    codeRef.current = editor
                    setMonacoInstance(editor)
                }}
                onChange={(value, event) => {
                    console.log(value);
                    setCodeData(value)
                }}
            />
        </div>
    )
}


export default Code