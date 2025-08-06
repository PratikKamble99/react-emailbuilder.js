declare global {
  interface EmailEditorHaderProps {
    enableSampleDrawer?: boolean;
    enablePrviewMode?: boolean;
    enableHtmlView?: boolean;
    enableJSONView?: boolean;
    downloadJSON?: boolean;
    importJSON?: boolean;
    enableShareCurentTemplate?: boolean;
  }

  interface EmailEditorOnSave {
    onSave: () => void;
  }


}

export {};
