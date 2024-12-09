import * as React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, ThemeProvider, DarkTheme, LightTheme } from 'baseui';
import { Button, SHAPE, KIND, SIZE } from 'baseui/button';
import Icons from '../icons';
import Logo from '../../components/icons/Logo';
import useEditor from 'scenify_sdk/useEditor';
import EditorContext from 'scenify_sdk/EditorContext';
import { template } from "./template";

const Container = styled('div', (props) => ({
  height: '70px',
  display: 'flex',
  padding: '0 2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const LogoContainer = styled('div', (props) => ({
  color: props.$theme.colors.primary,
  display: 'flex',
  alignItems: 'center',
}));


function NavbarEditor() {
  //@ts-ignore
  const { item, slideIndex } = useContext(EditorContext);
  const navigate = useNavigate();
  const editor = useEditor();
  const [theme, setTheme] = useState(LightTheme);

  const previewSlide = () => {
    try {
      if (item && item[slideIndex]) {
        const previewData = JSON.stringify(item);
        console.log('Preview Data:', previewData);
        localStorage.setItem('preview', previewData);
        navigate('/game/editor/preview');
      } else {
        console.error('Invalid item or slide index');
      }
    } catch (error) {
      console.error('Error in previewSlide:', error);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === DarkTheme ? LightTheme : DarkTheme);
  };

  const loadFonts = (fonts: any) => {
    const promisesList = fonts.map((font: any) => {
      // @ts-ignore
      return new FontFace(font.name, `url(${font.url})`, font.options)
        .load()
        .catch((err) => err);
    });
    return new Promise((resolve, reject) => {
      Promise.all(promisesList)
        .then((res) => {
          res.forEach((uniqueFont) => {
            // @ts-ignore
            if (uniqueFont && uniqueFont.family) {
              // @ts-ignore
              document.fonts.add(uniqueFont);
              resolve(true);
            }
          });
        })
        .catch((err) => reject(err));
    });
  };


  const handleLoadTemplate = async () => {
    const fonts: any = [];
    template.objects.forEach((object) => {
      if (object.type === "StaticText" || object.type === "DynamicText") {
        fonts.push({
          name: object.metadata.fontFamily,
          url: object.metadata.fontURL,
          options: { style: "normal", weight: 400 },
        });
      }
    });
    await loadFonts(fonts);
    editor.importFromJSON(template);
  };

  const downloadImage = async () => {
    if (editor) {
      // editor.toGif({})
      const data = await editor.toGif({});
      if (data) {
        const a = document.createElement("a");
        // @ts-ignore
        a.href = data;
        a.download = "drawing.gif";
        a.click();
      }
    }
  };




  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <LogoContainer>
            <Logo size={40} />
          </LogoContainer>
          <div>
            <Button onClick={() => editor.undo()} size={SIZE.default} kind={KIND.tertiary} shape={SHAPE.square}>
              <Icons.Undo size={24} />
            </Button>
            <Button onClick={() => editor.redo()} size={SIZE.default} kind={KIND.tertiary} shape={SHAPE.square}>
              <Icons.Redo size={24} />
            </Button>
          </div>
        </div>

        <div style={{ display: "flex", gap: "1rem", marginTop:"5px" }}>
          <Button onClick={handleLoadTemplate} kind={KIND.secondary}>
            Load template
          </Button>
          <Button onClick={downloadImage} kind={KIND.primary}>
            Download
          </Button>
          <Button onClick={previewSlide} kind={KIND.primary}>
            Preview
          </Button>
          <Button onClick={toggleTheme} kind={KIND.tertiary}>
            Toggle Theme
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default NavbarEditor;
