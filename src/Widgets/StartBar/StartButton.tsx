import './StartButton.css';

/**
 *  Properties for the component.
 */
export interface StartButtonProps {
    onClick?:() => void
};

/**
 *  The button to show the dropdown menu with application list.
 */
export default function StartButton({ onClick }:StartButtonProps) {
    return (
        <button className="startbar-startbutton" onClick={() => onClick && onClick()}>
            Start
        </button>
    );
}