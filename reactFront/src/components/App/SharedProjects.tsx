import React, { useState } from "react";
import { StarOutline } from "react-ionicons";

export const SharedProjects: React.FC = () => {
    const [hoveredRowIndex, setHoveredRowIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => {
        setHoveredRowIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredRowIndex(null);
    };

    const [files, setFiles] = useState([
        {
            name: "Untitled - Page 1",
            imagesrc:
                "https://s3-alpha-sig.figma.com/thumbnails/7d55d27d-d85b-47a7-97b5-ed774be39035?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FjANbcSm9TkRIKKw1p40Tv5L-PLwXc8B2FKkvoYX0B5-hEGnuG0i2hppwlbQj4qtFnSfv-tkJx38GvV~lgOOpHf2NFaYUvpMCbxVMsUlaxWcAS1np7LE2zvCZ1bjw2jh~ah7CZHOp4X9UFpLT1vgH8e3uU1XrunnQ6uzJRNlGjP2w8D~tQkkYvoRESZFdxIuRcPOb9iPt388XvME7xCo3HUMvTkCa3jNRDU1FT8wqhJsaFfy1fRD0-NXKjr2At-XeS3ge6uzpyc2SgnyPIOOlU70IgyXsgr0OGk2Vsp6kT1cuyng2TkPu9vT5DQuU4yUcWjmGEmCxX7y~oDjZznfpA__",
            sharedAt: "2022-08-30 09:58:07",
            sharedBy: "Nathan",
            lastModified: "2022-08-30 09:58:07",
            isFavorite: false,
            isActive: true,
        },
        {
            name: "Untitled - Page 1",
            imagesrc:
                "https://s3-alpha-sig.figma.com/thumbnails/7d55d27d-d85b-47a7-97b5-ed774be39035?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FjANbcSm9TkRIKKw1p40Tv5L-PLwXc8B2FKkvoYX0B5-hEGnuG0i2hppwlbQj4qtFnSfv-tkJx38GvV~lgOOpHf2NFaYUvpMCbxVMsUlaxWcAS1np7LE2zvCZ1bjw2jh~ah7CZHOp4X9UFpLT1vgH8e3uU1XrunnQ6uzJRNlGjP2w8D~tQkkYvoRESZFdxIuRcPOb9iPt388XvME7xCo3HUMvTkCa3jNRDU1FT8wqhJsaFfy1fRD0-NXKjr2At-XeS3ge6uzpyc2SgnyPIOOlU70IgyXsgr0OGk2Vsp6kT1cuyng2TkPu9vT5DQuU4yUcWjmGEmCxX7y~oDjZznfpA__",
            sharedAt: "2022-08-30 09:58:07",
            sharedBy: "Nathan",
            lastModified: "2022-08-30 09:58:07",
            isFavorite: false,
            isActive: false,
        },
    ]);
    return (
        <>
            <div className="w-full">
                <table
                    tabIndex={0}
                    className="w-full table-fixed border-collapse pr-[32px] mb-[4px]"
                    aria-multiselectable="true"
                >
                    <thead>
                        <tr>
                            <th className="min-w-[32px] w-[32px] align-middle">
                                <div className="px-[4px] my-[8px]">
                                    <div className="flex items-center h-[11px] leading-normal whitespace-nowrap select-none text-[11px]"></div>
                                </div>
                            </th>
                            <th className="w-[50%] align-middle">
                                <div className="px-[4px] my-[8px]">
                                    <div className="flex items-center h-[11px] leading-normal whitespace-nowrap select-none text-[11px]">
                                        <span
                                            data-tooltip-type="text"
                                            className="max-w-[100%] whitespace-nowrap overflow-hidden text-ellipsis text-[16px] font-semibold"
                                        >
                                            Name
                                        </span>
                                        <div className="pl-[3px]">↓</div>
                                    </div>
                                </div>
                            </th>
                            <th className="align-middle">
                                <div className="px-[4px] my-[8px] border-solid">
                                    <div className="flex items-center h-[11px] leading-normal whitespace-nowrap select-none text-[11px]">
                                        <span
                                            data-tooltip-type="text"
                                            className="max-w-[100%] whitespace-nowrap overflow-hidden text-ellipsis text-[16px] font-semibold"
                                        >
                                            Shared by
                                        </span>
                                    </div>
                                </div>
                            </th>
                            <th className="align-middle">
                                <div className="px-[4px] my-[8px] ">
                                    <div className="flex items-center h-[11px] leading-normal whitespace-nowrap select-none text-[11px]">
                                        <span
                                            data-tooltip-type="text"
                                            className="max-w-[100%] whitespace-nowrap overflow-hidden text-ellipsis text-[16px] font-semibold"
                                        >
                                            Shared At
                                        </span>
                                    </div>
                                </div>
                            </th>
                            <th className="w-[76px] min-w-[76px]">
                                <div className="px-[4px] my-[8px]">
                                    <div className="flex items-center h-[11px] leading-normal whitespace-nowrap select-none text-[11px]"></div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map((file, index) => (
                            <tr
                                key={index}
                                className={`table-row text-left scroll-mt-[50px] scroll-mb-[4px] outline-none content-none indent-0 select-none`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <td
                                    draggable="false"
                                    className="box-border align-middle table-cell text-left"
                                >
                                    <div className="py-[8px] pr-[2px] w-full h-full box-border text-ellipsis overflow-hidden flex-row items-center flex">
                                        <div className="w-full rounded-sm d-none">
                                            <span className="">
                                                <StarOutline
                                                    color={
                                                        file.isFavorite
                                                            ? "blue"
                                                            : "white"
                                                    }
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td
                                    draggable="true"
                                    className="py-[4px] align-middle box-border"
                                >
                                    <a
                                        href="https://www.figma.com/proto/34sXnQKsayhg1Bhr6Y6mZr/Untitled?node-id=0%3A1&amp;fuid=1247561221796275027&amp;prev-org-id=external-teams&amp;prev-selected-view=recentsAndSharing&amp;prev-tab=recently-viewed"
                                        className="w-full h-full cursor-default block select-none"
                                        rel="noopener"
                                    >
                                        <div
                                            className={`w-full h-full ${file.isActive ? "border-solid" : hoveredRowIndex === index ? "border-solid" : "border-none"} border-white box-border border-l-[2px] border-y-[2px] text-ellipsis flex-row flex items-center rounded-bl-md rounded-tl-md p-[2px]`}
                                        >
                                            <div className="text-left select-none w-full gap-[12px] border-spacing-0 border-spacing-x-0 h-[48px] overflow-hidden flex items-center">
                                                <div className="h-full flex-shrink-0 relative border-spacing-0 border-spacing-x-0">
                                                    <div className="absolute top-[2px] left-[2px]">
                                                        <span className="fill-blue-400">
                                                            <svg
                                                                className="svg"
                                                                key="file prototype 16 file type"
                                                                aria-label="file prototype 16 file type"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    fill="#d9d9d9"
                                                                    fill-opacity="1"
                                                                    fill-rule="nonzero"
                                                                    stroke="none"
                                                                    d="M0 8c0-4.418 3.582-8 8-8 4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8-4.418 0-8-3.582-8-8z"
                                                                ></path>
                                                                <path
                                                                    fill="#2c2c2c"
                                                                    fill-opacity="1"
                                                                    fill-rule="nonzero"
                                                                    stroke="none"
                                                                    d="M6 11.5v-7L12 8l-6 3.5z"
                                                                ></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className=" flex items-center justify-center w-full h-full overflow-hidden box-border object-contain aspect-[5/3] rounded-[4px]">
                                                        <img
                                                            src={file.imagesrc}
                                                            alt="thumbnail"
                                                            loading="lazy"
                                                            draggable="false"
                                                            className="w-full h-full object-cover object-top"
                                                        ></img>
                                                    </div>
                                                </div>
                                                <div
                                                    className="gap-[4px] flex-row items-center flex"
                                                    data-tooltip-type="text"
                                                    dir="auto"
                                                >
                                                    <span
                                                        data-tooltip-type="text"
                                                        className="text-[13px] leading-[24px] font-semibold max-w-full whitespace-nowrap overflow-hidden text-ellipsis"
                                                    >
                                                        {file.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </td>
                                <td
                                    draggable="true"
                                    className="py-[4px] align-middle box-border"
                                >
                                    <a
                                        href="https://www.figma.com/proto/34sXnQKsayhg1Bhr6Y6mZr/Untitled?node-id=0%3A1&amp;fuid=1247561221796275027&amp;prev-org-id=external-teams&amp;prev-selected-view=recentsAndSharing&amp;prev-tab=recently-viewed"
                                        className="w-full h-full cursor-default block select-none"
                                        rel="noopener"
                                    >
                                        <div
                                            className={`w-full h-full box-border border-y-[2px] ${file.isActive ? "border-solid" : hoveredRowIndex === index ? "border-solid" : "border-none"} text-ellipsis flex-row flex items-center p-[2px]`}
                                        >
                                            <div className="text-left select-none w-full gap-[12px] h-[48px] overflow-hidden flex items-center">
                                                <div
                                                    className="gap-[4px] flex-row items-center flex border-spacing-0 border-spacing-x-0"
                                                    data-tooltip-type="text"
                                                    dir="auto"
                                                >
                                                    <span
                                                        data-testid="initial-avatar"
                                                        aria-hidden="true"
                                                        className="text-[13px] bg-yellow-500 w-[24px] h-[24] uppercase flex items-center justify-center flex-shrink-0 select-none leading-[24px] overflow-hidden text-ellipsis rounded-[100%]"
                                                    >
                                                        {file.sharedBy[0].toUpperCase()}
                                                    </span>
                                                    <span
                                                        data-tooltip-type="text"
                                                        className="text-[13px] leading-[24px] font-medium max-w-full whitespace-nowrap overflow-hidden text-ellipsis"
                                                    >
                                                        {file.sharedBy}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </td>
                                <td
                                    draggable="true"
                                    className="py-[4px] align-middle box-border"
                                >
                                    <a
                                        href="https://www.figma.com/proto/34sXnQKsayhg1Bhr6Y6mZr/Untitled?node-id=0%3A1&amp;fuid=1247561221796275027&amp;prev-org-id=external-teams&amp;prev-selected-view=recentsAndSharing&amp;prev-tab=recently-viewed"
                                        className="w-full h-full cursor-default block select-none"
                                        rel="noopener"
                                    >
                                        <div
                                            className={`w-full h-full box-border border-y-[2px] ${file.isActive ? "border-solid" : hoveredRowIndex === index ? "border-solid" : "border-none"} text-ellipsis flex-row flex items-center p-[2px]`}
                                        >
                                            <div className="text-left select-none w-full gap-[12px] h-[48px] overflow-hidden flex items-center">
                                                <div
                                                    className="gap-[4px] flex-row items-center flex border-spacing-0 border-spacing-x-0"
                                                    data-tooltip-type="text"
                                                    dir="auto"
                                                >
                                                    <span
                                                        data-tooltip-type="text"
                                                        className="text-[13px] leading-[24px] font-semibold max-w-full whitespace-nowrap overflow-hidden text-ellipsis"
                                                    >
                                                        {file.sharedAt}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </td>
                                <td
                                    draggable="true"
                                    className="py-[4px] align-middle box-border"
                                >
                                    <a
                                        href="https://www.figma.com/proto/34sXnQKsayhg1Bhr6Y6mZr/Untitled?node-id=0%3A1&amp;fuid=1247561221796275027&amp;prev-org-id=external-teams&amp;prev-selected-view=recentsAndSharing&amp;prev-tab=recently-viewed"
                                        className="w-full h-full cursor-default block select-none"
                                        rel="noopener"
                                    >
                                        <div
                                            className={`w-full h-full box-border ${file.isActive ? "border-solid" : hoveredRowIndex === index ? "border-solid" : "border-none"} border-y-[2px] text-ellipsis flex-row flex items-center pl-[8px] py-[2px] rounded-r-lg border-r-[2px]`}
                                        >
                                            <div className="text-left select-none w-full gap-[12px] h-[48px] overflow-hidden flex items-center">
                                                <div
                                                    className="gap-[4px] flex-row items-center flex border-spacing-0 border-spacing-x-0"
                                                    data-tooltip-type="text"
                                                    dir="auto"
                                                ></div>
                                            </div>
                                        </div>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
export default SharedProjects;
