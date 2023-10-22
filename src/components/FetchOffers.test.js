import { describe, it, expect, vi } from 'vitest'

import { fetchOffers } from './FetchOffers'

describe('fetchOffers', () => {
  it('sets loading to true initially', async () => {
    const setLoading = vi.fn()

    await fetchOffers({
      department: 'sales',
      setLoading
    })

    expect(setLoading).toHaveBeenCalledWith(true)
  })
})
