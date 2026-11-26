import { ErrorMessage, Group, Label } from "../group/Group.tsx";
import Select from "./Select.tsx";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { SelectHTMLAttributes } from "react";

export type OptionType = {
    text: string;
    value: string;
    selected?: boolean;
};

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    errorMessage?: string;
    id?: string;
    registerObj?: UseFormRegisterReturn;
    options: OptionType[];
}

function SelectGroup({ label, errorMessage, id, registerObj, options, ...x }: Props) {
    return (
        <Group>
            {label && <Label htmlFor={id}>{label}</Label>}
            <Select id={id} $errorMessage={errorMessage} {...registerObj} {...x}>
                {options.map((option, index) => (
                    <option key={index} value={option.value} selected={option.selected}>
                        {option.text}
                    </option>
                ))}
            </Select>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Group>
    );
}

export default SelectGroup;
