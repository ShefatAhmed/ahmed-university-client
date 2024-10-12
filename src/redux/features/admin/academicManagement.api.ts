import { TAcademicDepartment, TAcademicSemester, TQueryParam, TResponseRedux } from "../../../types";
import { baseApi } from "../../api/baseApi";

const academicMangementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: (args) => {
                console.log(args);
                const params = new URLSearchParams();

                if (args) {
                    args.forEach((item: TQueryParam) => {
                        params.append(item.name, item.value as string);
                    });
                }

                return {
                    url: '/academic-semesters',
                    method: 'GET',
                    params: params,
                };
            },
            transformResponse: (response: TResponseRedux<TAcademicSemester[]>) => {
                return {
                    data: response.data,
                    meta: response.meta,
                };
            },
        }),
        addAcademicSemester: builder.mutation({
            query: (data) => ({
                url: "/academic-semesters/create-academic-semester",
                method: "POST",
                body: data
            })
        }),
        getAcademicDepartments: builder.query({
            query: () => {
              return { url: '/academic-departments', method: 'GET' };
            },
            transformResponse: (response: TResponseRedux<TAcademicDepartment[]>) => {
              return {
                data: response.data,
                meta: response.meta,
              };
            },
          }),
          addAcademicDepartment: builder.mutation({
            query: (data) => ({
              url: '/academic-departments/create-academic-department',
              method: 'POST',
              body: data,
            }),
          }),
    })
})

export const { useGetAllSemestersQuery, useAddAcademicSemesterMutation, useGetAcademicDepartmentsQuery, useAddAcademicDepartmentMutation } = academicMangementApi