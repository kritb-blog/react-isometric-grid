import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import IsometricGrid from ".";

describe("<IsometricGrid />", () => {
    it("should render correctly", async () => {
        const renderTileMock = jest.fn();
        render(<IsometricGrid opts={{ numOfCol: 5, numOfRow: 4, blockSize: 50 }} renderTile={renderTileMock} />);
        const tiles = await screen.findAllByTestId("tile");
        expect(tiles.length).toEqual(20);
        expect(renderTileMock).toHaveBeenCalledTimes(20);
    });

    it("should handle click event correctly", async () => {
        const onTileClickMock = jest.fn();
        render(
            <IsometricGrid
                opts={{ numOfCol: 5, numOfRow: 4, blockSize: 50 }}
                onTileClick={onTileClickMock}
                renderTile={(index: number) => <span data-testid={`item-${index}`}>item {index}</span>}
            />
        );
        const item0 = await screen.findByTestId("item-0");
        fireEvent.click(item0);
        expect(onTileClickMock).toHaveBeenNthCalledWith(1, 0, expect.any(Object));
    });

    it("should handle hover event correctly", async () => {
        const onTileHover = jest.fn();
        render(
            <IsometricGrid
                opts={{ numOfCol: 5, numOfRow: 4, blockSize: 50 }}
                onTileHover={onTileHover}
                renderTile={(index: number) => <span data-testid={`item-${index}`}>item {index}</span>}
            />
        );
        const item0 = await screen.findByTestId("item-0");
        fireEvent.mouseOver(item0);
        expect(onTileHover).toHaveBeenNthCalledWith(1, 0, expect.any(Object));
    });
});
