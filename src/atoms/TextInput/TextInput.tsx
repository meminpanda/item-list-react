import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { InputProps } from "./TextInputProps";

import "./text-input.scss";

export const TextInput = ({
    propertyName,
    icon,
    required,
    label,
    value,
    disabled,
    placeholder,
    right_icon,
    left_icon,
    extra_class,
    control,
    tabIndex,
  }: InputProps) => {
    return (
        <div className={`text-input ${extra_class}`}>
            <Controller
                control={control}
                name={propertyName}
                defaultValue={value}
                render={({ field }) => (
                    <TextField
                        disabled={disabled}
                        required={required}
                        {...field}
                        fullWidth
                        label={label}
                    />
                )}
            />
        </div>
    )
  }