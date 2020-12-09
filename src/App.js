import './App.css';
import './customBlocks/custom_Blocks'
import React from 'react'
import ReactBlockly from 'react-blockly'
import Blockly from 'blockly';

export default function App() {
  const initialXml = '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';
  const toolboxCategories = [
    {
      name: 'Logic',
      colour: '#5C81A6',
      blocks: [
        {
          type: 'controls_if'
        },
        {
          type: 'logic_compare'
        }
      ]
    },
    {
      name: 'Math',
      colour: '#5CA65C',
      blocks: [
        {
          type: 'math_round'
        },
        {
          type: 'math_number'
        }
      ]
    },
    {
      name: 'Custom',
      colour: '#5CA699',
      blocks: [
        {
          type: 'new_boundary_function'
        },
        {
          type: 'return'
        },
      ]
    }
  ]
  function workspaceDidChange(workspace) {
    const newXml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
    document.getElementById('generated-xml').innerText = newXml;

    const code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('code').value = code;
  }

  return (
    <>
      <ReactBlockly
        toolboxCategories={toolboxCategories}
        initialXml={initialXml}
        wrapperDivClassName="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
        }}
        workspaceDidChange={workspaceDidChange}
      />
      <pre id="generated-xml">
      </pre>
      <textarea id="code" style={{ height: "200px", width: "400px" }} value=""></textarea>
    </>
  )
}
