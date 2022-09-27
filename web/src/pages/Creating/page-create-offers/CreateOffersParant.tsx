import React, { useEffect } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router-dom'

import { RouteName } from 'shared/routes'

export type CreateOffersParams = { id: string }

export const CreateOffersParant: React.FC = () => {
  const { id } = useParams<CreateOffersParams>()
  const navigate = useNavigate()

  useEffect(() => {
    !id && navigate(`${RouteName.CreateOffers}/1`)
  }, [id])

  return <Outlet />
}
