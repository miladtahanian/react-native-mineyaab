import { View } from '@gluestack-ui/themed'
import { params } from '../../common/utils/params'
import { MinesField } from '../MinesField'

type Props = {
  board?: Array<any>
  onOpenField?: any
  onSelectField?: any
}

export default function Board({
  board,
  onOpenField,
  onSelectField,
}: Props) {
  const boardWidth = params.blockSize * params.getCollumnsAmount()

  const row = board?.map((row, r) => {
    const fields = row?.map((field, c) => {
      return (
        <MinesField
          key={c}
          {...field}
          onOpen={() => onOpenField(r, c)}
          onSelect={() => onSelectField(r, c)}
        />
      )
    })
    return (
      <View
        key={r}
        flexDirection="row"
        justifyContent={'space-between'}
        w={'100%'}
      >
        {fields}
      </View>
    )
  })

  return (
    <View
      alignItems={'center'}
      justifyContent={'space-between'}
      width={boardWidth}
      gap={5}
      w={'98%'}
      borderRadius={'$xl'}
      p={10}
      bgColor={'#0f014f8b'}
      borderWidth={3}
      borderColor={'#48319D'}
    >
      {row}
    </View>
  )
}
