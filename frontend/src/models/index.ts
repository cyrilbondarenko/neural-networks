import {Dayjs} from "dayjs";

export interface ISpec {
    field: string
    value: string
}
export interface IItem {
    title: string
    description: string
    categories: string[]
    url: string
    image: string
    date: string
    source: {
        title: string
        url: string
    }
    isBook?: boolean
    author?: string
    specs?: ISpec[]
}