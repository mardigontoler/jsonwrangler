

import deepJsonParse from "@/util/deepJsonParse";

test('Testing deep parse of simple stringified JSON object', ()=>{
    expect(deepJsonParse.deepParse(`"{\\"x\\":\\"y123\\"}"`)).toBe(`{
  "x": "y123"
}`);
})
