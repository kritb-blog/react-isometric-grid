import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tile from ".";

describe("<Tile />", () => {
    it("should handle click event correctly", () => {
        const renderMock = (index: number) => <span>{index}</span>;
        const onClickMock = jest.fn();
        render(<Tile index={0} render={renderMock} onTileClick={onClickMock} />);

        fireEvent.click(screen.getByText("0"));

        expect(onClickMock).toHaveBeenCalled();
    });

    it("should handle hover event correctly", () => {
        const renderMock = (index: number) => <span>{index}</span>;
        const onHoverMock = jest.fn();
        render(<Tile index={0} render={renderMock} onTileHover={onHoverMock} />);

        fireEvent.mouseOver(screen.getByText("0"));

        expect(onHoverMock).toHaveBeenCalled();
    });
});
