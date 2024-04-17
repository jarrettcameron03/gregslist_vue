import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"
import { api } from "./AxiosService.js"

class JobsService {
    async deleteJob(job) {
        const index = AppState.jobs.findIndex(x => x == job)
        if (index == -1) throw new Error("Couldn't find job!")
        await api.delete(`/api/jobs/${job.id}`)
        AppState.jobs.splice(index, 1)
    }

    async postJob(jobData) {
        const response = await api.post('/api/jobs', jobData)
        AppState.jobs.unshift(new Job(response.data))
    }

    async loadJobs() {
        const response = await api.get('/api/jobs')
        response.data.reverse()
        AppState.jobs = response.data.map(x => new Job(x))
    }
}

export const jobsService = new JobsService()