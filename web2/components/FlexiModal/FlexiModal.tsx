import React, { FC, useState } from "react";
import { useFlexiModalStyles } from "./FlexiModal.style";
import { Dialog, DialogContent, DialogProps } from "@mui/material";

import { Portal } from "@/shared/Portal/Portal";
import { FlexiCard } from "../FlexiCard/FlexiCard";

export interface FlexiModalProps extends DialogProps {
  cardClassName?: string;
  onClose?: () => void;
}

export const FlexiModal: FC<FlexiModalProps> = ({
  maxWidth = "lg",
  open,
  cardClassName,
  onClose,
  children,
  ...props
}) => {
  const classes = useFlexiModalStyles();
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  return (
    <Portal>
      <Dialog
        {...props}
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={maxWidth}
      >
          <button onClick={handleClose} className={classes.cross}>
            +
          </button>
          <FlexiCard className={cardClassName}>{children}</FlexiCard>
      </Dialog>
    </Portal>
  );
};
